import type { CartItem, MenuItem } from './types';
import { soundManager } from './sound';

class CartStore {
  private items: CartItem[] = [];
  private listeners: Array<() => void> = [];
  private readonly STORAGE_KEY = 'tequenos_papoi_cart';

  constructor() {
    this.load();
  }

  private load(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.items = JSON.parse(stored);
      }
    } catch {
      this.items = [];
    }
  }

  private save(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
    } catch {
      // Storage unavailable or disabled
    }
    this.notify();
  }

  public subscribe(fn: () => void): () => void {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  private notify(): void {
    this.listeners.forEach(fn => fn());
  }

  public getItems(): CartItem[] {
    return [...this.items];
  }

  public getItemCount(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  public getTotal(): number {
    return this.items.reduce((sum, item) => sum + (item.item.price * item.quantity), 0);
  }

  public addItem(item: MenuItem, sauce: string = 'Salsa de Ajo Papoi (Receta Secreta)'): void {
    const existing = this.items.find(ci => ci.item.id === item.id && ci.sauce === sauce);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ item, quantity: 1, sauce });
    }
    soundManager.playCrunch();
    this.save();
  }

  public removeItem(itemId: string, sauce: string): void {
    this.items = this.items.filter(ci => !(ci.item.id === itemId && ci.sauce === sauce));
    this.save();
  }

  public updateQuantity(itemId: string, sauce: string, delta: number): void {
    const existing = this.items.find(ci => ci.item.id === itemId && ci.sauce === sauce);
    if (existing) {
      existing.quantity += delta;
      if (existing.quantity <= 0) {
        this.removeItem(itemId, sauce);
        return;
      }
      this.save();
    }
  }

  public clear(): void {
    this.items = [];
    this.save();
  }

  public buildWhatsAppLink(customerName: string, deliveryType: 'delivery' | 'pickup', address: string, notes: string): string {
    const total = this.getTotal().toFixed(2);
    const dateStr = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    let message = `🍌 *¡HOLA TEQUEÑOS EL PAPOI!* 🧀\n`;
    message += `Quiero hacer un pedido a través de su página web:\n\n`;
    message += `👤 *Cliente:* ${customerName || 'Amigo Papoi'}\n`;
    message += `🛵 *Modalidad:* ${deliveryType === 'delivery' ? 'Delivery a domicilio' : 'Para retirar / Pick up'}\n`;
    if (deliveryType === 'delivery' && address) {
      message += `📍 *Dirección de entrega:* ${address}\n`;
    }
    if (notes) {
      message += `📝 *Observaciones:* ${notes}\n`;
    }
    message += `📅 *Fecha:* ${dateStr}\n\n`;
    message += `📦 *DETALLE DE MI PEDIDO:*\n`;

    this.items.forEach((ci, idx) => {
      const sub = (ci.item.price * ci.quantity).toFixed(2);
      message += `${idx + 1}. *${ci.quantity}x ${ci.item.name}* (${ci.item.packSize})\n`;
      message += `   ↳ Salsa: ${ci.sauce}\n`;
      message += `   ↳ Subtotal: $${sub}\n\n`;
    });

    message += `💰 *TOTAL A PAGAR: $${total} USD*\n\n`;
    message += `🎉 ¡Atención para Antony Contreras, Diego Tigrera o Richard Rodriguez! ¿Me confirman el tiempo estimado? ¡PAPOI! ✨`;

    // WhatsApp API URL (placeholder phone number can be configured, using standard WhatsApp click to chat)
    const encoded = encodeURIComponent(message);
    return `https://wa.me/584120000000?text=${encoded}`;
  }
}

export const cart = new CartStore();
