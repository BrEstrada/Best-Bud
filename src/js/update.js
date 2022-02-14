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
	// console.log(key);
	const productRef = databaseRef(db, `products/${key}`);
	const productSnapShot = await get(productRef);

	if (productSnapShot.exists()) {
		setFieldValues(productSnapShot.val());
	}

	productForm.addEventListener('submit', onUpdateProduct);
}

function onUpdateProduct(e) {
	e.preventDefault();
	updateProductData();
}

function setFieldValues({ name, urlPath, price, type }) {
	productForm.elements['productName'].value = name;
	document.querySelector('#uploadImage img').src = urlPath;
	productForm.elements['productPrice'].value = price / 100;
	productForm.elements['productType'].value = type;
}

function updateProductData() {
	const productName = e.target.elements['productName'].value.trim();
	const file = e.target.elements['productImage'].files;
	const price = document.querySelector('#productPrice').value;
	const type = document.querySelector('#productType').value;
	if (file.length !== 0) {
		// format storage for the new image
		const imageRef = storageRef(storage, `images/`);
	}
	const key = sessionStorage.getItem('key');
	const dataRef = databaseRef(db, `products/${key}`);

	set(dataRef, {
		// update data
	});
}

pageInit();
