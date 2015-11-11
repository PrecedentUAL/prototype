var addToBasket = {

	elms: {
		buyMaster: $('#buy-master'),
		productButtons: $('#product-buttons')
	},


	doSuccess: function() {
		// update cart count
		addToBasket.getCount();

		// show message to confirm item has been added to basket and a link to the basket
		console.log('product successfully added into the basket');
	},


	getCount: function() {
		estore.getCartCount( function( data ) {
			var basketTotal = data.cartCount;
			console.log('No of products in the Cart = ', basketTotal);
			$('#globalCartCount').text(basketTotal);
		});
	},


	preOrder: function( product ) {
		if ( typeof estore !== 'undefined' ) {
			estore.buyNow( {productCode:product,quantity: '1'}, function( data ) {
				//console.log("preOrder", data);
				if ( data.resultCode === '0000' ) {
					// $("#globalCartCount").text(data.cartCount);
					// success
					addToBasket.doSuccess();
				} else {
					console.log(data.resultMessage);
				}
			});
		} else {
			console.log("Can't find estore object");
		}
	},


	buyNow: function( product ) {
		if ( typeof estore !== 'undefined' ) {
			estore.addCart( {productCode:product,quantity: '1'}, function( data ) {
				//console.log("buyNow", data);
				if ( data.resultCode === '0000' ) {
					// $("#globalCartCount").text(data.cartCount);
					// success
					addToBasket.doSuccess();
				} else {
					console.log(data.resultMessage);
				}
			});
		} else {
			console.log("Can't find estore object");
		}
	},


	addToBasketClicks: function() {

		addToBasket.elms.productButtons.on('click', '.addToBasket', function( e ) {
			e.preventDefault();
			var parent = $(this).closest('.estore');
			var type = $(parent).data('atb');
			var product = $(parent).data('model-code');

			if ( type === 'buyNow' ) {
				addToBasket.buyNow( product );
				console.log('BUY NOW');
			}
			else if ( type === 'preOrder' ) {
				addToBasket.preOrder(product);
				console.log('PRE ORDER');
			}
			else if ( type === 'outOfStock' ) {
				console.log('OUT OF STOCK');
			}
			else if ( type === 'comingSoon' ) {
				console.log('COMING SOON');
			}
			else {
				console.log('addToBasket missing type.');
			}
		});
	},


	setUpButtons: function() {

		$('.estore').each( function( index ) {
			var modelCode = $(this).data('model-code');

			var estoreApiUrl = 'http://shop.samsung.com/uk/ng/p4v1/getRealTimeProductSimpleInfo?productCode=' + modelCode + '&callback=?';

			$.getJSON(estoreApiUrl, function(data) {

				console.log(data);
				var flag = data.flags;
				var stockLevel = data.stockLevelStatus;
				var $button = $('.estore[data-model-code="'+data.code+'"]').find('a.button');
				var dataAtb = '';

				if ( data.resultMessage === 'SUCCESS' ) {
					if ( stockLevel === 'outOfStock' ) {
						$button.addClass('oos');
						$button.text('out of stock');
						dataAtb = 'outOfStock';
					}
					else {
						if ( flag.indexOf('ORDER') !== -1 ) {
							dataAtb = 'preOrder';
						} else {
							dataAtb = 'buyNow';
						}

						$button.addClass('addToBasket');
						// Add the data tag for omniture.
						$button.text('add to basket');
					}
				} else {
					$button.addClass('err');
					$button.text('comingSoon');
					dataAtb = 'outOfStock';
					$button.parent().addClass('hidden');
				}

				$('.estore[data-model-code="'+data.code+'"]').attr('data-atb', dataAtb);
			});
			addToBasket.addToBasketClicks();
		});
	},


	init: function() {
		if ( buy.elms.buyMaster.length > 0 ) {
			addToBasket.setUpButtons();
		}
 	}
};