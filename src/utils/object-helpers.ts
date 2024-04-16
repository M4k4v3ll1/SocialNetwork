import {UserType} from "../redux/usersReducer";

export const updateObjectInArray = (items: UserType[], itemID: number, objPropName: keyof UserType, newPropsObj: Partial<UserType>) => {
    return items.map((u: UserType) => {
        if (u[objPropName] === itemID) {
            return {...u, ...newPropsObj}
        }
        return u
    })
}