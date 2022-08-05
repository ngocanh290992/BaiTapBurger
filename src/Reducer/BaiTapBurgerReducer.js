

const stateDefault = {
     burgerNew : [
        {name: 'salad', soLuong: 1, donGia: 10},
        {name: 'cheese', soLuong: 1, donGia: 20},
        {name: 'beef', soLuong: 1, donGia: 55}
    ],
    
    
}

const BaiTapBurgerReducer = (state = stateDefault, action) => {
    switch (action.type){
        case 'TANG_GIAM':{
            let burgerUpdate = [...state.burgerNew];
            
            let index = burgerUpdate.findIndex(item => item.name === action.name);

            if(action.tangGiam){
                burgerUpdate[index].soLuong += 1;
            }else{
                if (burgerUpdate[index].soLuong > 0) {
                    burgerUpdate[index].soLuong -= 1;
                }else{
                    alert('Còn gì đâu mà trừ')
                }
            }
            state.burgerNew = burgerUpdate;
            return {...state}
        }

        default: return {...state}
    }
}

export default BaiTapBurgerReducer;