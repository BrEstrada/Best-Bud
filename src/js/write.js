import {
	ref as storageRef,
	uploadBytes,
	getDownloadURL,
} from 'firebase/storage';
import { ref as databaseRef, push, set, get, remove } from 'firebase/database';
import { db, storage } from './libs/firebase/firebaseConfig';

document
	.querySelector('#productImage')
	.addEventListener('change', onImageSelected);
document.forms['productForm'].addEventListener('submit', onAddProduct);

function onAddProduct(e) {
	e.preventDefault();
	uploadNewProduct();
}

function onImageSelected(e) {
	// selected file
	let file = e.target.files[0];
	document.querySelector('.display img').src = URL.createObjectURL(file);
}

async function uploadNewProduct() {
	// form data
	const file = document.querySelector('#productImage').files[0];
	const name = document.querySelector('#productName').value.trim();
	const price = document.querySelector('#productPrice').value;
	const type = document.querySelector('#productType').value;

	// paths to the data to write
	const imageRef = storageRef(storage, `images/${file.name}`);
	const dataRef = databaseRef(db, 'products');

	// upload file to storage bucket
	const uploadResult = await uploadBytes(imageRef, file);

	// url to the image stored in the storage bucket
	const urlPath = await getDownloadURL(imageRef);

	// path on the storage bucket to the image
	const storagePath = uploadResult.metadata.fullPath;

	// firebase unique key
	const itemRef = await push(dataRef);

	set(itemRef, {
		key: itemRef.key,
		sku: `best${itemRef.key}`,
		urlPath,
		storagePath,
		name,
		type,
		price: Math.round(parseFloat(price).toFixed(2) * 100),
	});

	document.getElementById('upload-alert').removeAttribute('hidden');
}
