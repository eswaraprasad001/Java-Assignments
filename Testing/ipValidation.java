import java.util.NoSuchElementException;
import java.util.Scanner;
import java.util.StringTokenizer;

public class ipValidation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String ipAddress = sc.nextLine();
        boolean b = ValidateIpv4Address(ipAddress);
        if (b == true)
            System.out.println("Valid");
        else
            System.out.println("Invalid");
    }

    public static boolean ValidateIpv4Address(String ipAddress) {
        boolean b1 = false;


        try{
            StringTokenizer t = new StringTokenizer(ipAddress, ".");
            int a = Integer.parseInt(t.nextToken());
            int b = Integer.parseInt(t.nextToken());
            int c = Integer.parseInt(t.nextToken());
            int d = Integer.parseInt(t.nextToken());
            if ((a >= 0 && a <= 255) && (b >= 0 && b <= 255)
                    && (c >= 0 && c <= 255) && (d > 0 && d < 255))
                b1 = true;
        }
        catch(Exception e){
            b1=false;
        }
        return b1;
    }
}
