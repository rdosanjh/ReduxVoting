import Server from 'socket.io';

export default function startServer(store) {
  const io = new Server().attach(8090);
let previousState;
  store.subscribe(
    () => {
      let currentState = store.getState();
      if(currentState !== previousState)
      {
         previousState = currentState;
         io.emit('state', currentState.toJS());
      }
    });

  io.on('connection', (socket) => {
    console.log('connection incoming');
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));

  });
}