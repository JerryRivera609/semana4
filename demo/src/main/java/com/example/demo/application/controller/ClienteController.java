package com.example.demo.application.controller;

import com.example.demo.domain.models.Cliente;
import com.example.demo.domain.services.ClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cliente")
@RequiredArgsConstructor
public class ClienteController {

    private final ClienteService clienteService;

    @GetMapping()
    public List<Cliente> listarClientes(){
        return clienteService.listarClientes();
    }

    @PostMapping()
    public ResponseEntity guardarCliente(@RequestBody Cliente cliente){
        clienteService.guardarCliente(cliente);
        return ResponseEntity.ok(Map.of("Respuesta correcta","C"));
    }

}
