import { HYDRATE } from "next-redux-wrapper";
import { GoodsType } from "../actionTypes";

const initialState = {
    goods: [],
    createRole: {},
};

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.goods };
        }
    }
};

export default goodsReducer;
