import org.junit.jupiter.api.Test;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

class ipValidationTest {


    @Test
    public void testNullAndEmpty() {
        String ipEmpty = "";
        assertFalse(ipValidation.ValidateIpv4Address(null));
        assertFalse(ipValidation.ValidateIpv4Address(ipEmpty));
    }
    @Test
    public void testIPsForInvalidCharacters() {
        String ipInvalid1 = "1.#.4.6";
        String ipInvalid2 = "1,.2.%6.7";
        String ipInvalid3 = "A.B.C.D";
        assertFalse(ipValidation.ValidateIpv4Address(ipInvalid1));
        assertFalse(ipValidation.ValidateIpv4Address(ipInvalid2));
        assertFalse(ipValidation.ValidateIpv4Address(ipInvalid3));
    }
    @Test
    public void testIPsWithoutFourParts() {
        String ipOnePart = "127001";
        String ipTwoPart = "200.200.200";
        assertFalse(ipValidation.ValidateIpv4Address(ipOnePart));
        assertFalse(ipValidation.ValidateIpv4Address(ipTwoPart));
    }

    @Test
    public void testValidIPs() {
        String ipValid1 = "200.200.200.200";
        String ipValid2 = "192.167.1.1";

        assertTrue(ipValidation.ValidateIpv4Address(ipValid1));
        assertTrue(ipValidation.ValidateIpv4Address(ipValid2));


    }


}