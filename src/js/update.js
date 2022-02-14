import {
	ref as storageRef,
	uploadBytes,
	getDownloadURL,
} from 'firebase/storage';
import { ref as databaseRef, set, get } from 'firebase/database';
import { db, storage } from './libs/firebase/firebaseConfig';

const productForm = document.forms['productForm'];

async function pageInit() {
	const key = sessionStorage.getItem('key');
	console.log('update page');
	console.log(key);
	const productRef = databaseRef(db, `products/${key}`);
	const productSnapShot = await get(productRef);

	if (productSnapShot.exists()) {
		setFieldValues(productSnapShot.val());
	}

	productForm.addEventListener('submit', onUpdateProduct);
}

function onUpdateProduct(e) {
	e.preventDefault();
}

function setFieldValues({ name, urlPath }) {
	productForm.elements['productName'].value = name;
	document.querySelector('#uploadImage img').src = urlPath;
}

pageInit();
