import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishListItems: localStorage.getItem("wishListItems")
    ? JSON.parse(localStorage.getItem("wishListItems"))
    : [],
};

const WishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        addToWishList(state, action) {
        const existingIndex = state.wishListItems.findIndex(
            (item) => item.id === action.payload.id
        );

        if (existingIndex >= 0) {
            toast.info("Product already in wishlist", {
            position: "bottom-left",
            });
        } else {
            state.wishListItems.push(action.payload);
            toast.success("Product added to wishlist", {
            position: "bottom-left",
            });
        }
        localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));
        },
        removeFromWishlist(state, action) {
        state.wishListItems = state.wishListItems.filter(
            (item) => item.id !== action.payload.id
        );
        localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));
        toast.error("Product removed from wishlist", {
            position: "bottom-left",
        });
        }
    }
});

export const { addToWishList, removeFromWishlist } = WishListSlice.actions;
export default WishListSlice.reducer;