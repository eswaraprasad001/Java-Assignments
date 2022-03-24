package javaExamples;

import java.util.Scanner;
import java.util.Stack;

public class balancedBrackets {

    public static String Balanced(String bracket) {
        Stack<Character> stack = new Stack<>();
        for(int i=0;i<bracket.length();i++)
        {
            if(bracket.charAt(i)=='('||bracket.charAt(i)=='['||bracket.charAt(i)=='{')
            {
                stack.push(bracket.charAt(i));
            }
            else
            {
                stack.pop();
            }

        }
        if(stack.empty())
        {
            return bracket;
        }
        else
        {
            while(stack.size()!=0)
            {
                char element=stack.pop();
                if(element=='(')
                {
                    bracket=bracket+')';

                }
                if(element=='{')
                {
                    bracket=bracket+'}';

                }
                if(element=='[')
                {
                    bracket=bracket+']';
                }
            }
            return bracket;
        }
    }
    public static void main(String[] args) {
     Scanner sc= new Scanner(System.in);  //System.in is a standard input stream
        System.out.print("Enter a bracket string: ");
        String str= sc.next();
        System.out.println(Balanced(str));

    }
}



