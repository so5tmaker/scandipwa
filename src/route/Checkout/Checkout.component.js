import { Checkout as RouteCheckout } from 'SourceRoute/Checkout/Checkout.component';
import {
    DETAILS_STEP,
    SHIPPING_STEP,
    BILLING_STEP
} from 'SourceRoute/Checkout/Checkout.config';
import ContentWrapper from 'SourceComponent/ContentWrapper/ContentWrapper.component';
import ProgressBar from './ProgressBar.component';

class Checkout extends RouteCheckout {
    constructor(props) {
        super(props);
        this.stepMap[SHIPPING_STEP].number = 1;
        this.stepMap[BILLING_STEP].number = 2
        this.stepMap[DETAILS_STEP].number = 3;
    }

    render() {
        const { checkoutStep } = this.props;
        const { number } = this.stepMap[checkoutStep];
        return (
            <main block="Checkout">
                <ProgressBar number={number} />
                <ContentWrapper
                    wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
                    label={__('Checkout page')}
                >
                    {this.renderSummary(true)}
                    <div block="Checkout" elem="Step">
                        {this.renderTitle()}
                        {this.renderGuestForm()}
                        {this.renderStep()}
                        {this.renderLoader()}
                    </div>
                    <div>
                        {this.renderSummary()}
                        {this.renderPromo()}
                        {this.renderCoupon()}
                    </div>
                </ContentWrapper>
            </main>
        );
    }

}

export default Checkout;