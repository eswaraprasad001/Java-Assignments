package javaExamples;

public class perfectPR{
    // PRPR, PR, PRP// PRRP, RPP
    static int flag=0;
    public static void main(String[] args) {
        String str1="PRP";
        char str[]=str1.toCharArray();
        if(str.length/2==1 ){
            if(str[0]=='P' && str[1]=='R'|| str[1]=='P' && str[0]=='R')
            flag =1;
        }
        else {
                for (int i = 0; i < str.length - 2; i++) {

                    if (str[i] == 'P') {
                        if (str[i + 1] == 'R' && str[i + 2] == 'P') {
                            flag = 1;
                        }
                    }
                    if (str[i] == 'R') {
                        if (str[i + 1] == 'P' && str[i + 2] == 'R') {
                            flag = 1;
                        }
                    }

                }
        }
        if(flag==0){
            System.out.println("Imperfect");
        }
        else{
            System.out.println("Perfect");
        }

    }

}

