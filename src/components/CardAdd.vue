<template>
    <div class="card">

        <div class="card-container">
            <div class="front">
                <div class="image">
                    <img src="../assets/img-card/chip.jpeg" alt="">
                    <img src="../assets/img-card/logovisa.png" alt="">
                </div>
                <div class="card-number-box">{{ cardNumber }}</div>
                <div class="flexbox">
                    <div class="box">
                        <span>card holder</span>
                        <div class="card-holder-name">{{ cardHolder }}</div>
                    </div>
                    <div class="box">
                        <span>expires</span>
                        <div class="expiration">
                            <span class="exp-month">{{ cardExpirationMonth }}</span>
                            <span class="">{{ cardBarra }}</span>
                            <span class="exp-year">{{ cardYear }}</span>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="back">
                <div class="stripe"></div>
                <div class="box">
                    <span>cvv</span>
                    <div class="cvv-box">{{ cardCVV }}</div>
                </div>
            </div>
        </div>
    
        <form @submit.prevent="submitForm">
            <div class="inputBox">
                <span>card number</span>
                <input v-model="cardNumber" v-mask="'#### #### #### ####'" type="text" class="card-number-input"
                    @change="validateForm">
                <span class="error">{{ formErrors.cardNumber }}</span>
            </div>
            <div class="inputBox">
                <span>card holder</span>
                <input v-model="cardHolder" type="text" class="card-holder-input" @change="validateForm">
                <span class="error">{{ formErrors.cardHolder }}</span>
            </div>
            <div class="flexbox">
                <div class="inputBox">
                    <span>expiration mm</span>
                    <select v-model="cardExpirationMonth" name="" class="month-input" @change="validateForm">
                        <option value="month" selected disabled>Month</option>
                        <option v-for="month in months" :key="month">{{ month }}</option>
                    </select>
                    <span class="error">{{ formErrors.cardExpirationMonth }}</span>
                </div>
                <div class="inputBox">
                    <span>expiration yy</span>
                    <select v-model="cardYear" name="" class="year-input" @change="validateForm">
                        <option value="year" selected disabled>Year</option>
                        <option v-for="year in years" :key="year">{{ year }}</option>
                    </select>
                    <span class="error">{{ formErrors.year }}</span>
                </div>
                <div class="inputBox">
                    <span>cvv</span>
                    <input v-model="cardCVV" type="text" maxlength="3" class="cvv-input" @change="validateForm">
                    <span class="error">{{ formErrors.cardCVV }}</span>
                </div>
            </div>
            <!-- <input type="submit" value="salvar" class="submit-btn">  -->
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            cardNumber: '',
            cardHolder: '',
            cardExpirationMonth: 'month',
            cardYear: 'year',
            cardBarra: '/',
            cardCVV: '',
            years: [],
            months: [],
            formErrors: {
                cardNumber: '',
                cardExpirationMonth: '',
                year: '',
                cardCVV: '',
                cardHolder: '',
            },
        };
    },

    created() {
        this.years = this.generateYears(2023, 2040);
        this.months = this.generateMonth(1, 12);
    },
    methods: {
        generateYears(startYear, endYear) {
            const years = [];
            for (let year = startYear; year <= endYear; year++) {
                years.push(year);
            }
            return years;
        },
        submitForm() {
            if (this.validateForm()) {
                console.log('Formulário válido');
            }
        },
        generateMonth(startMonth, endMonth) {
            const months = [];
            for (let month = startMonth; month <= endMonth; month++) {
                months.push(month);
            }
            return months;
        },

        validateForm() {
            let isValid = true;

            const cardNumberWithoutSpaces = this.cardNumber.replace(/[-\s]/g, '');

            if (!/^(?:\d[- ]*){15}\d$/.test(cardNumberWithoutSpaces)) {
                this.formErrors.cardNumber = 'Número de cartão inválido';
                isValid = false;
            } else {
                this.formErrors.cardNumber = '';
            }

            if (this.cardHolder.trim() === '') {
                this.formErrors.cardHolder = 'Campo obrigatório';
                isValid = false;
            } else {
                this.formErrors.cardHolder = '';
            }

            if (this.cardExpirationMonth === 'month') {
                this.formErrors.cardExpirationMonth = 'Selecione um mês válido';
                isValid = false;
            } else {
                this.formErrors.cardExpirationMonth = '';
            }

            if (this.cardYear === 'year') {
                this.formErrors.year = 'Selecione um ano válido';
                isValid = false;
            } else {
                this.formErrors.year = '';
            }

            if (!/^\d{3}$/.test(this.cardCVV)) {
                this.formErrors.cardCVV = 'CVV inválido';
                isValid = false;
            } else {
                this.formErrors.cardCVV = '';
            }

            return isValid;
        },
    },
};
</script>
<style scoped>
.card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    padding-bottom: 3.75rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: uppercase;
}

form {
    background-color: var(--white100);
    border-radius: .313rem;
    box-shadow: 0 10px 0.938rem rgba(0, 0, 0, .1);
    padding: 20px;
    width: 600px;
    padding-top: 160px;
}

form .inputBox {
    margin-top: 20px;
}

form .inputBox span {
    display: block;
    color: var(--gray300);
    padding-bottom: .313rem;
}

form .inputBox input,
form .inputBox select {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, .3);
    color: var(--gray500);
}

form .flexbox {
    display: flex;
    gap: 0.938rem;
}

form .flexbox .inputBox {
    flex: 1 1 150px;
}

form .submit-btn {
    /* background: linear-gradient(45deg, rgb(228, 242, 148), rgb(78, 78, 78)); */
    margin: auto;
    display: block;
    background: var( --yellow500);
    margin-top: 20px;
    padding: 10px;
    font-size: 20px;
    color: var(--white100);
    border-radius: 10px;
    border: none;
    cursor: pointer;
    border: none;
    text-transform: capitalize;
    /*transition: .2s linear;*/
}

/* form .submit-btn:hover {
    letter-spacing: 2px;
    opacity: .8;
} */

.card-container {
    margin-bottom: -150px;
    position: relative;
    height: 250px;
    width: 400px;
}

.card-container .front {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, rgb(228, 242, 148), rgb(78, 78, 78));
    border-radius: .313rem;
    backface-visibility: hidden;
    box-shadow: 0 0.938rem 25px rgba(0, 0, 0, .2);
    padding: 20px;
    transform: perspective(1000px) rotateY(0deg);
    transition: transform .4s ease-out;
}

.card-container .front .image {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
}

.card-container .front .image img {
    height: 3.125rem;
    border-radius: 10%;
}

.card-container .front .card-number-box {
    padding: 1.875rem 0;
    font-size: 22px;
    color: var(--white100);
}

.card-container .front .flexbox {
    display: flex;
}

.card-container .front .flexbox .box:nth-child(1) {
    margin-right: auto;
}

.card-container .front .flexbox .box {
    font-size: 0.938rem;
    color: var(--white100);
}

.card-container .back {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(45deg, blueviolet, deeppink);
    border-radius: .313rem;
    padding: 20px 0;
    text-align: right;
    backface-visibility: hidden;
    box-shadow: 0 0.938rem 25px rgba(0, 0, 0, .2);
    transform: perspective(1000px) rotateY(180deg);
    transition: transform .4s ease-out;
}

.card-container .back .stripe {
    background-color: var(--black100);
    width: 100%;
    margin: 10px 0;
    height: 3.125rem;
}

.card-container .back .box {
    padding: 0 20px;
}

.card-container .back .box span {
    color: var(--white100);
    font-size: 0.938rem;
}

.card-container .back .box .cvv-box {
    height: 3.125rem;
    padding: 10px;
    margin-top: .313rem;
    color: var(--gray800);
    background-color: var(--white100);
    border-radius: .313rem;
    width: 100%;
}

.card-container .back .box img {
    margin-top: 1.875rem;
    height: 1.875rem;
}
</style>