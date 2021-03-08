import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import {
    BILLING_STEP,
    DETAILS_STEP,
    SHIPPING_STEP
} from 'Route/Checkout/Checkout.config';

import './CheckoutProgress.style';

/**
 *  @namespace Test/Component/CheckoutProgress/Component/CheckoutProgressComponent */
export class CheckoutProgressComponent extends PureComponent {
    static propTypes = {
        checkoutStep: PropTypes.oneOf([
            SHIPPING_STEP,
            BILLING_STEP,
            DETAILS_STEP
        ]).isRequired
    };

    render() {
        const { checkoutStep } = this.props;
        return (
            <div block="CheckoutProgress">
                <div block="CheckoutProgress" elem="Line" mods={ { isPassed: true } } />
                <div block="CheckoutProgress" elem="Step" mods={ { isPassed: true } }>1</div>
                <div
                  block="CheckoutProgress"
                  elem="Line"
                  mods={ { isPassed: checkoutStep === BILLING_STEP || checkoutStep === DETAILS_STEP } }
                />
                <div
                  block="CheckoutProgress"
                  elem="Step"
                  mods={ { isPassed: checkoutStep === BILLING_STEP || checkoutStep === DETAILS_STEP } }
                >
                    2
                </div>
                <div
                  block="CheckoutProgress"
                  elem="Line"
                  mods={ { isPassed: checkoutStep === DETAILS_STEP } }
                />
            </div>
        );
    }
}

export default CheckoutProgressComponent;
