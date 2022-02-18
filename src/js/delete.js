import { ref as databaseRef, remove } from 'firebase/database';
import { db, storage } from './libs/firebase/firebaseConfig';

function pageInit() {
	const key = sessionStorage.getItem('key');
	console.log('delete page');
	// console.log(key);
	// ref with the key
	// remove(ref)
	const path = `products/${key}`;
	const dataRef = databaseRef(path);

	console.log(dataRef);

	dataRef.remove();
}

pageInit();
