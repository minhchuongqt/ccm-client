import io from 'socket.io-client'
import { API } from '../config'


export const socket = io('http://127.0.0.1:8001/socket')
