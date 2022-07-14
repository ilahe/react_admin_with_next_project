import { HYDRATE } from "next-redux-wrapper";
import { CustomersType } from "../actionTypes";

const initialState = {
  customers: [],
  cities: [],
  block_reasons: [],
  createCustomers: {
    full_name: "",
    phone: "",
    email: "",
    city: "",
    note: "",
    address: "",
    contacts: {
      phones: "",
      whatsapp: "",
    },
    avatar: "",
    password: "",
    password_confirmation: "",
    email_notify_info: {
      mailing: 1,
      sms: 0,
      comments: 1,
    },
    sms_notify_info: {
      sms: 0,
      comments: 1,
    },
  },
  errors: {},
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.customers };
    }
    case CustomersType.PUT_CUSTOMERS: {
      return { ...state, customers: action.payload };
    }
    case CustomersType.SET_CUSTOMERS_DATA_BY_KEY: {
      const key = action.payload.key;
      if (key === "phones") {
        return {
          ...state,
          createCustomers: {
            ...state.createCustomers,
            contacts: {
              ...state.createCustomers.contacts,
              [key]: action.payload.value,
            },
          },
        };
      }
      if (key === "whatsapp") {
        return {
          ...state,
          createCustomers: {
            ...state.createCustomers,
            contacts: {
              ...state.createCustomers.contacts,
              [key]: action.payload.value,
            },
          },
        };
      }
      return {
        ...state,
        createCustomers: {
          ...state.createCustomers,
          [key]: action.payload.value,
        },
      };
    }
    case CustomersType.SET_ERRORS: {
      if (action.payload) {
        const key = action.payload.key;
        return {
          ...state,
          errors: {
            ...state.errors,
            [key]: action.payload.value,
          },
        };
      }
      return state;
    }
    case CustomersType.CLEAR_ERRORS: {
      if (action.payload) {
        const key = action.payload.key;
        const filterErrors = Object.keys(state.errors).filter(
          (el) => el !== key
        );
        const clearedObject = filterErrors.reduce((object, el) => {
          object[el] = filterErrors[el];
          return object;
        }, {});

        return {
          ...state,
          errors: clearedObject,
        };
      }
      return state;
    }
    case CustomersType.PUT_SINGLE_CUSTOMER: {
      return { ...state, createCustomers: action.payload };
    }
    case CustomersType.SET_IMAGE_TO_STORE: {
      return {
        ...state,
        createCustomers: { ...state.createCustomers, avatar: action.payload },
      };
    }
    case CustomersType.PUT_ALL_CITIES: {
      return { ...state, cities: action.payload };
    }
    case CustomersType.PUT_BLOCK_REASON: {
      return { ...state, block_reasons: action.reasons };
    }
    default:
      return state;
  }
};

export default customerReducer;
