package javaExamples;

import java.util.ArrayList;
import java.util.Scanner;

public class makePalindrome {

    static ArrayList<Character> chr = new ArrayList<>();

    static boolean isPalindrome(char[] str) {
        int len = str.length;
        if (len == 1)
            return true;

        int ptr1 = 0;

        int ptr2 = len - 1;

        while (ptr2 >= ptr1) {
            if (str[ptr1] != str[ptr2])
                return false;
            ptr1++;
            ptr2--;
        }

        return true;
    }

    static int noOfAppends(String s) {

        if (isPalindrome(s.toCharArray()))
            return 0;

        chr.add(s.charAt(0));
        s = s.substring(1);

        return noOfAppends(s);
    }

    public static void main(String arr[]) {
//        String s = "ab";
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter a string: ");
        String s= sc.nextLine();
        noOfAppends(s);
        for (int i = chr.size() - 1; i >= 0; i--) {
            s = s + chr.get(i);

        }
        System.out.println(s);
    }
}

