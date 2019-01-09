package cz.cvut.sin.dashboard.backend.model;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "user_info")
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "billing_info")
    private String billingInfo;

    @Column(name = "premium_until")
    private Timestamp premiumUntil;

    @Column(name = "registration_date")
    private Timestamp registrationDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBillingInfo() {
        return billingInfo;
    }

    public void setBillingInfo(String billingInfo) {
        this.billingInfo = billingInfo;
    }

    public Timestamp getPremiumUntil() {
        return premiumUntil;
    }

    public void setPremiumUntil(Timestamp premiumUntil) {
        this.premiumUntil = premiumUntil;
    }

    public Timestamp getRegistrationDate() {
        return registrationDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserInfo userInfo = (UserInfo) o;
        return Objects.equals(id, userInfo.id) &&
                Objects.equals(billingInfo, userInfo.billingInfo) &&
                Objects.equals(premiumUntil, userInfo.premiumUntil) &&
                Objects.equals(registrationDate, userInfo.registrationDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, billingInfo, premiumUntil, registrationDate);
    }

    public void setRegistrationDate(Timestamp registrationDate) {
        this.registrationDate = registrationDate;
    }
}
