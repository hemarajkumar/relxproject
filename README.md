 <div class="category-search-results quick-order-page" *ngIf="products"
      [ngClass]="{'d-none':!products.length || hasInlineError, 'withdrawn-1': withdrawnInitDropdown?.length == 1,
      'withdrawn-2': withdrawnInitDropdown?.length == 2, 'withdrawn-3': withdrawnInitDropdown?.length == 3}" 
      [class.cf-search-results]="showProductSequence">
      <div class="category-search-result" *ngFor="let product of products let index=i" 
      [ngClass]="{'quicksearch-withdrawn': product.withdrawnStatus === 'WITHDRAWN'}"      
      (keydown.arrowup)="focusPreviousChild($event)"
      (keydown.arrowdown)="focusNextChild($event)"
      (keydown.enter)="kBEnterEvent(product, searchCatInput)"
      tabindex="{{i}}"
      id="qa-product-tile-{{product.displayCode}}">
        <a id="image_prod_cat_link" class="image-prod-category d-none d-md-block">
          <cx-media *ngIf="config.displayProductImages" 
            [container]="product.images" format="27.2Wx27.2H"
            [alt]="product.summary">
          </cx-media>
        </a>
        <a id="product_desc_link" (click)="sendProduct(product, searchCatInput);clear(searchCatInput)" 
            class="products-description"
            [class.has-media]="config.displayProductImages">
          <div class="product-and-pack">
            <span class="category-search-product-name" [innerHTML]="product.salestext"></span>
          </div>
           <span class="part-number-wrapper">
            <span class="part-number mr-2" *ngIf="isPartNumberEligible$ | async"
              >{{ 'quickAddModal.partNumber' | cxTranslate }}
              {{ product.partNumber ? product.partNumber : ('common.not_provided' | cxTranslate) }}</span
            >
          </span>
          
  <span id="material_code_info" class="category-material-code">{{  ('invoicedetails.productdetails.productcode') | cxTranslate }} {{ product.displayCode}} {{orderContractNumber}}
            <span *ngIf="showProductSequence && orderContractNumber && product?.isContractProduct" class="contract-product-label ml-2">{{ 'searchBox.contractProductLabel' | cxTranslate }}</span>
            <span id="withdraw_status_info" class="with-drawn-status" *ngIf="product.withdrawnStatus"
              [ngClass]="product.withdrawnStatus?.toLowerCase()">
              {{('productDetails.withdrawnstatus.' + product.withdrawnStatus) | cxTranslate }}
            </span>
          </span>
        </a>
      </div>
    </div>
