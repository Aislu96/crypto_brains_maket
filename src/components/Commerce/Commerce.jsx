import Button from "../Button/Button";
import registration from '../../images/commerce/registrationIcon.svg';
import bank from '../../images/commerce/bankIcon.svg';
import trading from '../../images/commerce/tradingIcon.svg';
import wallet from '../../images/commerce/walletIcon.svg';
import './Commerce.scss';
import RepeatingBlock from "../RepeatingBlock/RepeatingBlock";

function Commerce() {
    return (
        <RepeatingBlock classSection={"commerce"}  classBlock={"container-color"} title={"Start Trading In Simple Process"}
                        text={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}>
            <div className="commerce__block">
                <div className="commerce__groups">
                    <img src={registration} alt="registration"/>
                    <div className="commerce__group">
                        <p className='h24'>Create Account</p>
                        <p className='p16b'>It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages.</p>
                    </div>
                    <Button text="Sign Up Now" classButton="button_commerce"/>
                </div>
                <div className="commerce__groups">
                    <img src={bank} alt="bank icon"/>
                    <div className="commerce__group">
                        <p className='h24'>Verify Bank Account</p>
                        <p className='p16b'>It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages.</p>
                    </div>
                    <Button text="Verify Now" classButton="button_commerce"/>
                </div>
                <div className="commerce__groups">
                    <img src={trading} alt="trading icon"/>
                    <div className="commerce__group">
                        <p className='h24'>Add Fund in Wallet</p>
                        <p className='p16b'>It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages.</p>
                    </div>
                    <Button text="Add Now" classButton="button_commerce"/>
                </div>
                <div className="commerce__groups">
                    <img src={wallet} alt="registration icon"/>
                    <div className="commerce__group">
                        <p className='h24'>Start Trading</p>
                        <p className='p16b'>It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages.</p>
                    </div>
                    <Button text="Start Now" classButton="button_commerce"/>
                </div>
            </div>
        </RepeatingBlock>
    );
}

export default Commerce;
