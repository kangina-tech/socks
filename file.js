document.getElementById('add-product-btn').addEventListener('click', function() {
    document.querySelector('.home-screen').style.display = 'none';
    document.querySelector('.add-product-screen').style.display = 'block';
});

document.getElementById('next-btn').addEventListener('click', function() {
    document.querySelector('.add-product-screen').style.display = 'none';
    document.querySelector('.add-variants-screen').style.display = 'block';
});

document.getElementById('review-btn').addEventListener('click', function() {
    document.querySelector('.add-variants-screen').style.display = 'none';
    document.querySelector('.review-screen').style.display = 'block';

    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productPrice = document.getElementById('product-price').value;
    const variantSize = document.getElementById('variant-size').value;
    const variantColor = document.getElementById('variant-color').value;
    const variantMaterial = document.getElementById('variant-material').value;
    const variantLength = document.getElementById('variant-length').value;
    const variantPattern = document.getElementById('variant-pattern').value;

    const summary = `
        <h3>${productName}</h3>
        <p>${productDescription}</p>
        <p>Base Price: ${productPrice}</p>
        <p>Size: ${variantSize}</p>
        <p>Color: ${variantColor}</p>
        <p>Material: ${variantMaterial}</p>
        <p>Length: ${variantLength}</p>
        <p>Pattern: ${variantPattern}</p>
    `;
    document.getElementById('product-summary').innerHTML = summary;
});

document.getElementById('edit-btn').addEventListener('click', function() {
    document.querySelector('.review-screen').style.display = 'none';
    document.querySelector('.add-product-screen').style.display = 'block';
});
