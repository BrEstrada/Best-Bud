import { update } from 'firebase/database';

function budCard({ key, name, urlPath, price, type }) {
	const template = `
    <div class="col-md-4 d-flex align-self-stretch">
        <div class="card mb-4 shadow" style="width: 18rem;">
			<img class="card-img-top" src="${urlPath}" alt="${name}">
			<div class="card-body d-flex flex-column">
                <div class="text-center mt-auto">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-1 text-muted">$${
						price / 100
					}</h6>
                    <p class="card-text">${type}</p>
					<button class="btn btn-primary" id="edit" data-key="${key}">Edit</button>
					<button class="btn btn-danger" id="delete" data-key="${key}">Delete</button>
                </div>
			</div>
		</div>
        </div>
    `;

	const element = document.createRange().createContextualFragment(template)
		.children[0];
	addCardControls(element);

	return element;
}

function addCardControls(product) {
	product.querySelector('#edit').addEventListener('click', onEditProduct);
	product.querySelector('#delete').addEventListener('click', onDeleteProduct);
}

function onEditProduct(e) {
	const key = e.target.dataset.key;
	sessionStorage.setItem('key', key);
	window.location.assign('update.html');
}

function onDeleteProduct(e) {
	const key = e.target.dataset.key;
	sessionStorage.setItem('key', key);
	window.location.assign('delete.html');
}

export { budCard };
