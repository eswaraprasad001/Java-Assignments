package javaExamples;
import java.util.HashMap;

public class productPair {

        public static void main(String[] args) {
            //{7 ,-9, -8, 4 ,1}, K = 28
            int[] arr = {7 ,-9, -8, 4 ,1 };
            int product = 28;
            System.out.println(findProduct(arr, product));

        }

        private static int findProduct(int[] arr, int product) {
            HashMap<Float, Integer> hashMap = new HashMap<>();

            for (int i : arr) {
                float val = (float) product / i;
                hashMap.put(val, i);
            }
            System.out.println(hashMap);
            int t=0;
            for (int i = 0; i < arr.length; i++) {

                if (hashMap.containsKey((float) arr[i])) {
                    float toDelete = hashMap.get((float) arr[i]);
                    t++;
                    hashMap.remove(toDelete);
                }
            }
            return t;
        }

}

