import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";

interface Cart {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartArray: Cart[];
  itemCount: number;
  displaySum: number;
  addToCart: (item: Cart) => void;
  removeFromCart: (id: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartArray: [],
      itemCount: 0,
      displaySum: 0,
      addToCart: (item) =>
        set((state) => {
          const itemIndex = state.cartArray.findIndex(
            (cartItem) => cartItem.id === item.id
          );
          let updatedCart = state.cartArray;
          if (itemIndex === -1) {
            updatedCart = [...updatedCart, item];
          } else {
            updatedCart[itemIndex].quantity += 1;
          }
          const updatedCount = state.itemCount + 1;
          const updatedSum = state.displaySum + item.price;

          return {
            cartArray: updatedCart,
            itemCount: updatedCount,
            displaySum: updatedSum,
          };
        }),

      removeFromCart: (id) =>
        set((state) => {
          const findItem = state.cartArray.findIndex(
            (cartItem) => cartItem.id === id
          );
          const updatedCart = state.cartArray;
          const updatedCount = state.itemCount - 1;
          const updatedSum = state.displaySum - updatedCart[findItem].price;
          if (updatedCart[findItem].quantity > 1) {
            updatedCart[findItem].quantity -= 1;
          } else {
            updatedCart.splice(findItem, 1);
          }
          return {
            cartArray: updatedCart,
            itemCount: updatedCount,
            displaySum: updatedSum,
          };
        }),
    }),

    {
      name: "CartItems",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
