<template>
  <div class="px-0 px-md-5 py-4">
    <ListPools
      title="My Liquidity"
      v-if="Object.keys(subgraph.poolShares).length > 0"
      :query="queryMyLiquidity"
      class="mb-4"
    />
    <!-- <h3 class="mb-4 px-4 px-md-0">My Wallet</h3>
    <UiTable>
      <UiTableTh>
        <div v-text="'Asset'" class="flex-auto text-left" />
        <div v-text="'Price'" class="column" />
        <div v-text="'Balance'" class="column" />
      </UiTableTh>
      <UiTableTr
        :to="{ name: 'token', params: { id: i } }"
        v-for="(tokenPrice, i) in tokenPrices"
        :key="i"
      >
        <Token :address="i" class="mr-3" size="32" />
        <div class="flex-auto text-left">
          {{ tokenPrice.name }}
          <span class="text-gray" v-text="tokenPrice.symbol" />
        </div>
        <div class="column">
          <div>{{ $n(tokenPrice.price, 'price') }}</div>
          <div class="text-gray">{{ $n(tokenPrice.priceETH) }} DEV</div>
        </div>
        <div class="column">
          <div>{{ $n(tokenPrice.balance) }} {{ tokenPrice.symbol }}</div>
          <div class="text-gray">
            {{ $n(tokenPrice.balanceUSD, 'currency') }}
          </div>
        </div>
      </UiTableTr>
    </UiTable> -->
  </div>
</template>

<script>
// import { getAddress } from '@ethersproject/address';
// import { normalizeBalance } from '@/helpers/utils';

export default {
  computed: {
    queryMyLiquidity() {
      const poolShares = this.subgraph.poolShares;
      const ids = Object.keys(poolShares).map(share => share.toLowerCase());
      return {
        where: {
          id_in: ids
        }
      };
    }
    // tokenPrices() {
    //   const ethPrice = this.getPrice(this.config.addresses.weth, 1);
    //   return Object.fromEntries(
    //     Object.entries(this.subgraph.tokenPrices)
    //       .map(tokenPrice => {
    //         const address = getAddress(tokenPrice[0]);
    //         const balance = this.web3.balances[address];
    //         const decimals = tokenPrice.decimals;
    //         tokenPrice[1].priceETH = tokenPrice[1].price / ethPrice;
    //         tokenPrice[1].balance = normalizeBalance(balance, decimals);
    //         tokenPrice[1].balanceUSD = this.getPrice(
    //           tokenPrice[0],
    //           tokenPrice[1].balance
    //         );
    //         return tokenPrice;
    //       })
    //       .filter(tokenPrice => tokenPrice[1].balanceUSD > 0)
    //       .sort((a, b) => b[1].balanceUSD - a[1].balanceUSD)
    //   );
    // }
  }
};
</script>
