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




  // Check if focus is on searchbox or result list elements
  private isSearchboxFocused(): boolean {
    return (
      this.getResultElements().includes(this.getFocusedElement()) ||
      this.winRef.document.querySelector('input[aria-label="search"]') === this.getFocusedElement()
    );
  }

  // Return result list as HTMLElement array
  private getResultElements(): HTMLElement[] {
    return Array.from(this.winRef.document.querySelectorAll('.category-search-results > .category-search-result'));
  }

  private getFocusedElement(): HTMLElement {
    return this.winRef.document.activeElement as HTMLElement;
  }

  private getFocusedIndex(): number {
    return this.getResultElements().indexOf(this.getFocusedElement());
  }

  // Focus on previous item in results list
  focusPreviousChild(event): void {
    event.preventDefault(); // Negate normal keyscroll
    const [results, focusedIndex] = [this.getResultElements(), this.getFocusedIndex()];
    // Focus on last index moving to first
    if (results.length) {
      if (focusedIndex < 1) {
        results[results.length - 1].focus();
      } else {
        results[focusedIndex - 1].focus();
      }
    }
  }

  // Focus on next item in results list
  focusNextChild(event): void {
    event.preventDefault(); // Negate normal keyscroll
    const [results, focusedIndex] = [this.getResultElements(), this.getFocusedIndex()];
    // Focus on first index moving to last
    if (results.length) {
      if (focusedIndex >= results.length - 1) {
        results[0].focus();
      } else {
        results[focusedIndex + 1].focus();
      }
    }
  }

  
  kBEnterEvent(product, searchCatInput): void {
    if (product.withdrawnStatus !== 'WITHDRAWN') {
      this.sendProduct(product, searchCatInput);
      this.clear(searchCatInput);
    }
  }

