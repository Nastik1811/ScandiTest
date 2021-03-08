import CheckoutProgressComponent from 'Component/CheckoutProgress';
import { ContentWrapper as SourceContentWrapper } from 'SourceComponent/ContentWrapper/ContentWrapper.component';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

import './Checkout.extention.style';

/** @namespace Test/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    renderProgress() {
        const { checkoutStep } = this.props;

        return (
            <CheckoutProgressComponent checkoutStep={ checkoutStep } />
        );
    }

    render() {
        return (
            <main block="Checkout">
                { this.renderProgress() }
                <SourceContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </SourceContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
