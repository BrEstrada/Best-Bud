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
	// upload file to storage bucket
	// url to the image stored in the storage bucket
	// path on the storage bucket to the image
	// firebase unique key
}
