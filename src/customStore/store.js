class Store {
	state; //Тут будет храниться состояние нашего Store
	rootReducer; //Программа, которая описывает, как выполнять действия

	subscribers = new Map(); //Map с сущностями, подписанными на обновление

	constructor(rootReducer) {
		//Используем конструктор, чтобы мы могли передавать различные rootReducer. Таким образом мы не зашываем логигу обработки.
		this.rootReducer = rootReducer;
		this.state = this.rootReducer(); //Запускаем функцию сразу при создании
	}

	subscribe(callback) {
		//Метод, который позволяет подписать сущности
		this.subscribers.set(callback, callback);
	}

	unsubscribe(callback) {
		//Метод позволяющий отписать сущности
		this.subscribers.delete(callback);
	}
	//action = {type: "string", payload: "any"}
	dispatch(action) {
		//Механизм оповещения о возникновении изменений
		this.state = this.rootReducer(this.state, action); //Обновление state
		this.subscribers.forEach((_, callback) => {
			callback(this.state);
		});
	}

	getState() {
		return this.state;
	}
}
//Используем паттерн Singleton - это одна из возможных реализаций
export const createStore = (function () {
	//Используем Immediately Invoke Function. Функция создается и сразу вызывается. Это подход используется, чтобы использовать механизмы замыкания. У них есть свои личные мини хранилища
	let store; //Хранилище функции
	return rootReducer => {
		if (!store) {
			store = new Store(rootReducer);
		}
		return store;
	};
})();
