package javaExamples;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;


public class dateExtract {
    public static void main(String[] args) throws ParseException {

        //String s1 = " You have meetings, on 12345 22/12/2022, 25-12-2022 and 03-01-2023\n";
        Scanner sc= new Scanner(System.in); //System.in is a standard input stream
        System.out.print("Enter a string: ");
        String s1= sc.nextLine();
        String[] match = s1.split("\\s");
        Set<String> data = new LinkedHashSet<String>();

        for (String str:match) {
            try {

                String dateString;
                dateString = str;
                Date date = new SimpleDateFormat("dd-mm-yyyy").parse(dateString);
                @Deprecated
                String year = String.valueOf(date.getYear()+1900);
                data.add(year);

//                String str[] = dateString.split("-");
//                int year = Integer.parseInt(str[2])
//                data.add(year);

            }
            catch (ParseException e) {
                //System.out.println("Skipped");
            }
        }
        System.out.println(data.size());
    }

}

