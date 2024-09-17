import { io } from 'socket.io-client';

export function Socket(namespace: string) {
	return io(`${import.meta.env.VITE_API_URL}/${namespace}`, {
		withCredentials: true,
	});
}
