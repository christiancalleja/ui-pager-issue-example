<template>
  <Page>
    <StackLayout>
      <!-- EXAMPLE OF HOW IT SHOULD WORK, BUT DOESNT -->
      <GridLayout class="page" rows="200,10">
        <Pager
          ref="pager"
          id="pager"
          width="100%"
          android:width="100%"
          :selectedIndex="selectedPage"
          @selectedIndexChange="onPageChanged"
        >
          <PagerItem
            v-for="(item, index) in items"
            :key="index"
            :backgroundColor="item.color"
          >
            <StackLayout>
              <Label :text="item.title" />
            </StackLayout>
          </PagerItem>
        </Pager>
        <!-- Try removing PAGERVIEWID to see the indicator actual position and how where it should be-->
        <PagerIndicator
          pagerViewId="pagers"
          type="worm"
          verticalAlignment="bottom"
          horizontalAlignment="center"
          marginBottom="10"
        />
      </GridLayout>
      <!-- EXAMPLE OF WORKAROUND -->
      <GridLayout class="page" rows="200">
        <Pager
          ref="pager2"
          id="pager2"
          width="100%"
          android:width="100%"
          :selectedIndex="selectedPage"
          @selectedIndexChange="onPage2Changed"
        >
          <PagerItem
            v-for="(item, index) in items"
            :key="index"
            :backgroundColor="item.color"
          >
            <StackLayout>
              <Label :text="item.title" />
            </StackLayout>
          </PagerItem>
        </Pager>
        <!-- Try removing PAGERVIEWID to see the indicator actual position and how where it should be-->
        <PagerIndicator
          ref="pager2indicator"
          type="worm"
          verticalAlignment="bottom"
          horizontalAlignment="center"
          marginBottom="10"
          @loaded="onPager2Load"
        />
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "First", color: "#e67e22" },
        { title: "Second", color: "#3498db" },
        { title: "Third", color: "#e74c3c" },
        { title: "Fourth", color: "#9b59b6" },
      ],
      selectedPage: 2,
    };
  },
  methods: {
    onPageChanged: function (e) {
      this.selectedPage = e.value; //VUE3:: changed from e.selectedIndex to e.value
    },
    onPage2Changed: function (e) {
      this.selectedPage = e.value; //VUE3:: changed from e.selectedIndex to e.value
      this.$refs.pager2indicator?.nativeView.setSelection(
        this.selectedPage,
        true
      );
    },
    onPager2Load(args) {
      const component = args.object;
      component.setCount(this.items.length);
      component.setSelection(this.selectedPage, false);
    },
  },
};
</script>
