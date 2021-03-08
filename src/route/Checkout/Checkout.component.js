import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

/** @namespace Test/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    renderTitle() {
        const { checkoutStep } = this.props;
        const { title = '' } = this.stepMap[checkoutStep];

        console.log(this.props.checkoutStep);
        return (
            <h1 block="Checkout" elem="Title">
                { title }
            </h1>
        );
    }
}

export default CheckoutComponent;
