export const depositMoney =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
}

export const WithdrawMoney=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'Withdraw',
            payload:amount
        })
    }
}