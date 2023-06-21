export function Increment(data){
    return(
        {
            type:"increment",
            payload:data
        }
    )
}

export const AddCart=(data)=>{
    return(
        {
            type:"AddCart",
            payload:data
        }

    )
}
export const RemoveCart=(data)=>{
    return(
        {
            type:"RemoveCart",
            payload:data
        }

    )
}