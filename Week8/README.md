学习笔记
按照超哥视频中的要求，本周的笔记整理了一些初级排序代码如下
1. 冒泡排序代码
它是最慢的排序算法之一，但也是一种最容易实现的排序算法。 之所以叫冒泡排序是因为使用这种排序算法排序时，数据值会像气泡一样从数组的一端漂浮到另一端。假设正在将一组数字按照升序排列，较大的值会浮动到数组的右侧，而较小的值则会浮动到数组的左侧。之所以会产生这种现象是因为算法会多次在数组中移动，比较相邻的数据，当左侧值大于右侧值时将它们进行互换。
function bubbleSort() {
    var numElements = this.dataStore.length;
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner < outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                this.swap(this.dataStore, inner, inner + 1);
            }
        }
    }
}

2. 选择排序
选择排序从数组的开头开始，将第一个元素和其他元素进行比较。检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续。这个过程一直进行，当进行到数组的倒数第二个位置时，所有数据便完成了排序。
function selectionSort() {
    var min;
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
        }
        swap(this.dataStore, outer, min);
    }
}


3. 插入排序
插入排序有两个循环。外循环将数组元素挨个移动，而内循环则对外循环中选中的元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，那么数组元素会向右移动，为内循环中的这个元素腾出位置。
function insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
        this.dataStore[inner] = this.dataStore[inner - 1];
        --inner;
    }
    this.dataStore[inner] = temp;
    }
}
