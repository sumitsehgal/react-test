import { createSlice } from '@reduxjs/toolkit'


/**
 * 
 * First Name
Last Name
Email
Phone
DOB (Date picker)
Address (Text Area)
Education (dynamic subform to open in modal)
Degree(dropdown)
College(Input)
Start Year (Year Picker)
End Year (Year Picker)
Experience (dynamic subform to open in modal)
Company Name(dropdown)
Start Month & Year (Month and Year Picker)
End Month & Year (Month and Year Picker)


[
          {
            degree: '',
            college: '',
            startYear: '',
            endYear: ''
          }
        ]

[
          {
            companyName: '',
            startMonthYear: '',
            endMonthYear: ''
          }
        ]

 */


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    'data': [
        {
            id:1,
            firstName: 'Sumit',
            lastName: '',
            email: '',
            phone: '',
            dob: '',
            address: '',
            education: [
              {
                degree: '',
                college: '',
                startYear: '',
                endYear: ''
              }
            ],
            experience: [
              {
                companyName: '',
                startMonthYear: '',
                endMonthYear: ''
              }
            ]
        }
    ]
  },
  reducers: {
    addUser: (state, action) => {

        state.data = [
          ...state.data,
          {
            id: 'id' + (new Date()).getTime(),
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: action.payload.email,
            phone: action.payload.phone,
            dob: action.payload.dob,
            address: action.payload.address,
            education: action.payload.education,
            experience: action.payload.experience
          }
        ]

    },
    updateUser: (state, action) => {
        state.data = state.data.map((user) => {
          if(user.id === action.payload.id) {
            return {
              ...user,
              firstName: action.payload.firstName,
              lastName: action.payload.lastName,
              email: action.payload.email,
              phone: action.payload.phone,
              dob: action.payload.dob,
              address: action.payload.address,
              education: action.payload.education,
              experience: action.payload.experience
            }
          }
          return user
        })
    },
    deleteUser: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload)
    },
    listUser: (state, action) => {
      
    },
    getUser: (state, action) => {
      const { index } = action.payload
      return state.data[index]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, updateUser, deleteUser, listUser, getUser } = userSlice.actions

export default userSlice.reducer