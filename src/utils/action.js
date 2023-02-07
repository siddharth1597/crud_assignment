import { reducerCases } from "./Constants"

const initialUsers = (payload) => {
	return {
		type: reducerCases.INITIAL,
		payload: payload
	}
}

const createUsers = (payload) => {
	return {
		type: reducerCases.CREATE,
		payload: payload
	}
}

const deleteUsers = (id) => {
	return {
		type: reducerCases.DELETE,
		payload: id
	}
}

const updateUsers = (data, id) => {
	return {
		type: reducerCases.UPDATE,
		payload: data,
		id: id
	}
}

const userInfo = (id) => {
	return {
		type: reducerCases.USER_INFO,
		payload: id
	}
}

export {
    initialUsers,
	createUsers,
    deleteUsers,
    updateUsers,
    userInfo
}