package cz.cvut.sin.dashboard.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import cz.cvut.sin.dashboard.backend.model.Dashboard;

import java.util.Set;
import java.util.stream.Collectors;

public class DashboardDto {

    @JsonProperty("user_name")
    private String userName;

    @JsonProperty("windows")
    private Set<WindowDto> windows;

    public static DashboardDto fromEntity(Dashboard dashboard){

        DashboardDto dto = new DashboardDto();
        dto.setUserName(dashboard.getUser().getName());
        dto.setWindows(dashboard.getWindows().stream().map(WindowDto::fromEntity).collect(Collectors.toSet()));
        return dto;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Set<WindowDto> getWindows() {
        return windows;
    }

    public void setWindows(Set<WindowDto> windows) {
        this.windows = windows;
    }
}
