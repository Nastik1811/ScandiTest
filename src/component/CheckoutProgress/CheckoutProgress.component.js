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

    stepMap = {
        [SHIPPING_STEP]: {
            order: 1,
            title: __('Shipping')
        },
        [BILLING_STEP]: {
            order: 2,
            title: __('Review & Payment')
        },
        [DETAILS_STEP]: {
            order: 3
        }
    };

    renderIcon({ step, isPassed }) {
        if (isPassed) {
            return (
                <div
                  block="CheckoutProgress"
                  elem="CheckIcon"
                />
            );
        }

        return (
            <span
              block="CheckoutProgress"
              elem="OrderIcon"
            >
                { this.stepMap[step].order }
            </span>
        );
    }

    renderStepTitle({ step }) {
        return (
            <span
              block="CheckoutProgress"
              elem="StepTitle"
            >
                { this.stepMap[step].title }
            </span>
        );
    }

    renderStep({ step, isPassed, isRiched }) {
        return (
            <div
              block="CheckoutProgress"
              elem="Step"
              mods={ { isRiched } }
            >
                { this.renderIcon({ step, isPassed }) }
                { this.renderStepTitle({ step }) }
            </div>
        );
    }

    renderLine({ isRiched }) {
        return (
            <div block="CheckoutProgress" elem="Line" mods={ { isRiched } } />
        );
    }

    render() {
        const { checkoutStep } = this.props;
        const isFirstPassed = checkoutStep === BILLING_STEP || checkoutStep === DETAILS_STEP;
        const isSecondPassed = checkoutStep === DETAILS_STEP;

        return (
            <div block="CheckoutProgress">
                { this.renderLine({ isRiched: true }) }
                { this.renderStep({ step: SHIPPING_STEP, isPassed: isFirstPassed, isRiched: true }) }
                { this.renderLine({ isRiched: isFirstPassed }) }
                { this.renderStep({ step: BILLING_STEP, isPassed: isSecondPassed, isRiched: isFirstPassed }) }
                { this.renderLine({ isRiched: isSecondPassed }) }
            </div>
        );
    }
}

export default CheckoutProgressComponent;
