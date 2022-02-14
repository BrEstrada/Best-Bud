import { ref as databaseRef, set, get, remove, ref } from 'firebase/database';
import { db, storage } from './libs/firebase/firebaseConfig';

function pageInit() {
	const key = sessionStorage.getItem('key');
	console.log('delete page');
	console.log(key);
	// ref with the key
	// remove(ref)
	// const path = `products/${key}`;
	// const productRemoveRef = ref(path);
	// remove(productRemoveRef);
}

pageInit();
