import { create } from 'zustand';

export const useUIStore = create((set) => ({
  modal: null,
  confirm: null,

  openModal: (tittle, message, onClose) =>
    set({
      modal: { tittle, message, onClose },
    }),

  closeModal: () => set({ modal: null }),

  openConfirm: ({ tittle, message, onConfirm, onCancel }) =>
    set({
      confirm: { tittle, message, onConfirm, onCancel },
    }),

  closeConfirm: () => set({ confirm: null }),
}));
