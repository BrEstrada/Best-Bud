import { ref as dataRef, get, set, update } from 'firebase/database';
import { db } from './libs/firebase/firebaseConfig';
import { budCard } from './templates/budCard';

async function pageInit() {
	const productRef = dataRef(db, 'products/');
	const productSnapShot = await get(productRef);
	const data = productSnapShot.val();

	const productCards = Object.values(data).map((product) => {
		const card = budCard(product);
		// layout thrashing
		document.getElementById('card-display').append(card);
		return card;
	});
}

pageInit();
