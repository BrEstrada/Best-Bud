import { update } from 'firebase/database';

function budCard({ key, name, urlPath, price, type }) {
	const template = `
    <div class="col-md-4 d-flex align-self-stretch">
        <div class="card mb-4 box-shadow" style="width: 18rem;">
			<img class="card-img-top" src="${urlPath}" alt="Card image cap">
			<div class="card-body d-flex flex-column">
				<h5 class="card-title">Product</h5>
				<h6 class="card-subtitle mb-1 text-muted">$25</h6>
				<p class="card-text">Indica</p>
                <div class="text-center mt-auto">
					<a href="#" class="btn btn-primary" id="edit">Edit</a>
					<a href="#" class="btn btn-danger" id="delete">Delete</a>
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
}

function onEditProduct(e) {
	const key = e.target.dataset.key;
	sessionStorage.setItem('key', key);
	window.location.assign('update.html');
}

export { budCard };
