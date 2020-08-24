<template>
    <div @click="open"
    :class="{ 'toggle-remove-button' : this.clickable }"
    class="estimate-preview-wrapper">
        <div class="top">
            <div class="title">{{ this.name }}</div>
            <div class="price" :class="{ blue: this.pending }">{{ this.price }}</div>
        </div>
        <div v-if="openBottom" 
        class="bottom">

            <div v-if="!this.pending"
            class="f-line">
                <span>Labor Cost</span>
                <div class="price">{{ this.price }}</div>
            </div>
            <div  v-if="!this.pending"
            class="bottom-price">1h @ {{ this.price }}/h</div>

            <div v-else class="waiting-request">
                we are working on your request!
            </div>

        </div>
        <div @click.stop="$emit('show')"
        class="remove-box blue-over-overlay align-items-center justify-content-center">
            <p class="mb-0 blue-over d-flex justify-content-center align-items-center blue-over-p">
                <img src="@/assets/mixed/delete.png" class="img-fluid mb-0" alt="blue-over Icon">
                <span>Remove Service</span>
            </p>
        </div>
    </div>
</template>


<script>
export default {
    name: 'EstimatePreview',
    props: ['clickable', 'pending', 'name', 'price'],
    data() {
        return {
            openBottom: false,
        }
    },
    methods: {
        open() {
            if(this.clickable) {
                this.openBottom = !this.openBottom
            }
        }
    }
}
</script>


<style lang="scss">

.estimate-preview-wrapper {
    position: relative;
    width: 100%;
    box-shadow: 0px 2px 10px #221F1F26;
    padding: 28px 16px;
    margin-bottom: 25px;
    overflow: hidden;
    cursor: pointer;

    &.toggle-remove-button:hover .price {
        transform: translateX(-350%);
    }

    &.toggle-remove-button:hover .remove-box {   
        right: 0%;
    }

    .remove-box {
        position: absolute;
        width: 18%;
        height: 100%;
        top: 0;
        right: -18%;
        transition: 0.2s;
        background: #45afdb;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .35s;

        img {
            height: 15px;
            margin-right: 5px;
        }

        span {
            font-family: MontBold, sans-serif;
            color: white;
        }
    }

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .bottom {
        border-top: 1px solid #707070;
        margin-top: 28px;
        padding-top: 5px;

        .f-line {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;

            span {
                font-family: PoppinsRegular, sans-serif;
                font-size: 16px;
            }

        }
        .bottom-price {
            font-family: PoppinsRegular, sans-serif;
            color: #31569C;
            font-size: 16px;     
        }

        .waiting-request {
            font-family: PoppinsRegular, sans-serif;
            color: #45AFDB;
            font-size: 18px;
            margin-top: 10px;
        }
    }

    .title, .price {
        color: #4A4A4A;
        font-size: 18px;
    }
    .title {
        font-family: MontBold, sans-serif;
    }
    .price {
       font-family: PoppinsRegular, sans-serif;
       transition: .3s;

        &.blue {
            color: #45AFDB !important;
        }
    }

    @media (max-width: 767px) {
        &.toggle-remove-button:hover .price {
            transform:none;
        }

        &.toggle-remove-button:hover .remove-box {   
            right: 0%;
            width: 100%;
        }
    }
}

</style>