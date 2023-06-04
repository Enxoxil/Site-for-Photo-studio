import { formApi } from '../../../apis/formApi';

const addNewUserAPI = formApi.injectEndpoints({
  endpoints: (builder) => ({
    addNewUser: builder.mutation({
      query: (body) => ({
        url: 'users.json',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Users']
    }),
    overrideExisting: false,
  })
});

export const { useAddNewUserMutation } = addNewUserAPI;
