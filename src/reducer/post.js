export const initialState = {
  writePostLoading: false,
  writePostDone: false,
  writePostError: null,
  postList: [],
};

export const WRITE_POST_REQUEST = "WRITE_POST_REQUEST";
export const WRITE_POST_SUCCESS = "WRITE_POST_SUCCESS";
export const WRITE_POST_FAILURE = "WRITE_POST_FAILURE";

export const writePost = (data) => ({
  type: WRITE_POST_REQUEST,
  data,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_POST_REQUEST:
      return {
        ...state,
        writePostLoading: true,
        writePostDone: false,
        writePostError: null,
      };
    case WRITE_POST_SUCCESS:
      return {
        ...state,
        writePostLoading: false,
        writePostDone: true,
      };
    case WRITE_POST_FAILURE:
      return {
        ...state,
        writePostLoading: false,
        writePostError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
