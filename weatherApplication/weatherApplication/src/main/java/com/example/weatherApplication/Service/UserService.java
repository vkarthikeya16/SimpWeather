package com.example.weatherApplication.Service;

import com.example.weatherApplication.Dao.UserRepository;
import com.example.weatherApplication.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        // Save the user directly in the database without hashing the password
        Optional<User> existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser.isPresent()) {
            throw new RuntimeException("User already exists with this username.");
        }
        return userRepository.save(user);
    }

    public User loginUser(String username, String password) {
        // Find the user by username
        Optional<User> userOptional = userRepository.findByUsername(username);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (password.equals(user.getPassword())) {
                return user;
            } else {
                throw new RuntimeException("Invalid password.");
            }
        } else {
            throw new RuntimeException("Invalid username.");
        }


    }

    public List<User> findAll() {
        return userRepository.findAll();
    }
}
